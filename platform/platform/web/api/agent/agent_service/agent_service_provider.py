from typing import Any, Callable, Coroutine

from fastapi import Depends

from ltl_platform.schemas.agent import AgentRun
from ltl_platform.schemas.user import UserBase
from ltl_platform.services.tokenizer.dependencies import get_token_service
from ltl_platform.services.tokenizer.token_service import TokenService
from ltl_platform.settings import settings
from ltl_platform.web.api.agent.agent_service.agent_service import AgentService
from ltl_platform.web.api.agent.agent_service.mock_agent_service import (
    MockAgentService,
)
from ltl_platform.web.api.agent.agent_service.open_ai_agent_service import (
    OpenAIAgentService,
)
from ltl_platform.web.api.agent.dependancies import get_agent_memory
from ltl_platform.web.api.agent.model_factory import create_model
from ltl_platform.web.api.dependencies import get_current_user
from ltl_platform.web.api.memory.memory import AgentMemory


def get_agent_service(
    validator: Callable[..., Coroutine[Any, Any, AgentRun]],
    streaming: bool = False,
    azure: bool = False,  # As of 07/2023, azure does not support functions
) -> Callable[..., AgentService]:
    def func(
        run: AgentRun = Depends(validator),
        user: UserBase = Depends(get_current_user),
        agent_memory: AgentMemory = Depends(get_agent_memory),
        token_service: TokenService = Depends(get_token_service),
    ) -> AgentService:
        if settings.ff_mock_mode_enabled:
            return MockAgentService()

        model = create_model(run.model_settings, user, streaming=streaming, azure=azure)
        return OpenAIAgentService(
            model,
            run.model_settings,
            agent_memory,
            token_service,
            callbacks=None,
        )

    return func
