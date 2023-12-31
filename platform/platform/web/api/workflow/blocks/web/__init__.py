from ltl_platform.schemas.workflow.base import Block
from ltl_platform.schemas.workflow.blocks.agents.company_context_agent import (
    CompanyContextAgent,
)
from ltl_platform.schemas.workflow.blocks.agents.content_refresher_agent import (
    ContentRefresherAgent,
)
from ltl_platform.schemas.workflow.blocks.agents.generic_llm_agent import (
    GenericLLMAgent,
)
from ltl_platform.schemas.workflow.blocks.agents.summary_agent import SummaryAgent
from ltl_platform.schemas.workflow.blocks.agents.web_interaction_agent import (
    WebInteractionAgent,
)
from ltl_platform.schemas.workflow.blocks.conditions.if_condition import IfCondition
from ltl_platform.schemas.workflow.blocks.do_nothing import DoNothingBlock
from ltl_platform.schemas.workflow.blocks.pdf.diff_doc import DiffDoc
from ltl_platform.schemas.workflow.blocks.slack.slack_bot import SlackMessageBlock
from ltl_platform.schemas.workflow.blocks.text_input_webhook import TextInputWebhook
from ltl_platform.schemas.workflow.blocks.triggers.api_trigger import (
    APITriggerBlock,
)
from ltl_platform.schemas.workflow.blocks.triggers.manual_trigger import (
    ManualTriggerBlock,
)
from ltl_platform.schemas.workflow.blocks.url_status_check import (
    UrlStatusCheckBlock,
)


def get_block_runner(block: Block) -> Block:
    if block.type == "IfCondition":
        return IfCondition(**block.dict())
    if block.type == "DiffDoc":
        return DiffDoc(**block.dict())
    if block.type == "WebInteractionAgent":
        return WebInteractionAgent(**block.dict())
    if block.type == "APITriggerBlock":
        return APITriggerBlock(**block.dict())
    if block.type == "ContentRefresherAgent":
        return ContentRefresherAgent(**block.dict())
    if block.type == "ManualTriggerBlock":
        return ManualTriggerBlock(**block.dict())
    if block.type == "UrlStatusCheck":
        return UrlStatusCheckBlock(**block.dict())
    if block.type == "SlackWebhook":
        return SlackMessageBlock(**block.dict())
    if block.type == "TextInputWebhook":
        return TextInputWebhook(**block.dict())
    if block.type == "SummaryAgent":
        return SummaryAgent(**block.dict())
    if block.type == "CompanyContextAgent":
        return CompanyContextAgent(**block.dict())
    if block.type == "FileUploadBlock":
        return DoNothingBlock(**block.dict())
    if block.type == "GenericLLMAgent":
        return GenericLLMAgent(**block.dict())
    else:
        raise ValueError(f"Unknown block type: {block.type}")
