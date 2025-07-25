import React from "react";
import { Heading } from "../ui/heading.tsx";
import { clsx } from "clsx";
import { Separator } from "@/components/ui/separator.tsx";

/**
 * The properties for {@link HeadingLayout}
 */
export type HeadingLayoutProps = {
    /** The text for the heading */
    heading: string;

    /** Additional children that will be displayed in the heading */
    headingChildren?: Array<React.ReactNode> | React.ReactNode;

    /** Everything below the heading */
    children?: React.ReactNode;

    /** Set additional classes */
    className?: string;
};

/**
 * A layout that includes a top level heading
 */
export default function HeadingLayout(props: HeadingLayoutProps) {
    return (
        <div className={clsx("relative flex h-full w-full flex-col gap-2 lg:gap-4", props.className)}>
            <div
                className={clsx(
                    // Base
                    "flex w-full flex-wrap items-end justify-between gap-4",
                    // Colors
                    "border-zinc-950/10 dark:border-white/10",
                )}
            >
                <div className={"flex flex-col gap-3"}>
                    <Heading>{props.heading}</Heading>
                </div>
                {props.headingChildren !== undefined ? (
                    <div className={"flex justify-end gap-4"}>{props.headingChildren}</div>
                ) : undefined}
            </div>
            <Separator />
            {props.children}
        </div>
    );
}
