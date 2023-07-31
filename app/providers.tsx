"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Toaster, resolveValue } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ColorModeScript
                initialColorMode="system"
                key="chakra-ui-no-flash"
                storageKey="chakra-ui-color-mode"
            />
            <ChakraProvider>{children}</ChakraProvider>
            <Toaster
                containerStyle={{
                    bottom: 40,
                    left: 20,
                    right: 20,
                }}
                position="bottom-center"
                gutter={10}
                toastOptions={{
                    duration: 3000,
                }}
            >
                {(t) => (
                    <div
                        style={{
                            opacity: t.visible ? 1 : 0,
                            transform: t.visible
                                ? "translatey(0)"
                                : "translatey(0.75rem)",
                            transition: "all .2s",
                        }}
                    >
                        {resolveValue(t.message, t)}
                    </div>
                )}
            </Toaster>
        </CacheProvider>
    );
}
