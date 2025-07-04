import type { SimpleTag } from "@/api/model/tag.interface";
import HeadingLayout from "@/components/layouts/heading-layout";
import { DataTable } from "@/components/ui/data-table.tsx";
import { CreateTagDialog } from "@/components/dialogs/create-tag";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TAGS_CONTEXT from "@/context/tags";
import type { ColumnDef } from "@tanstack/react-table";
import type { VariantProps } from "class-variance-authority";
import React, { Suspense } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { createFileRoute, Link } from "@tanstack/react-router";
import { TrashIcon } from "lucide-react";
import { DeleteTagDialog } from "@/components/dialogs/delete-tag";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";

/**
 * The properties for {@link TagsOverview}
 */
export type TagsOverviewProps = {};

/**
 * Renders a tag overview table.
 */
export function TagsOverview(_props: TagsOverviewProps) {
    const [t] = useTranslation("tag");
    const [tg] = useTranslation();

    const tagContext = React.useContext(TAGS_CONTEXT);

    const [openCreateTag, setOpenCreateTag] = React.useState(false);
    const [openDeleteTag, setOpenDeleteTag] = React.useState<SimpleTag>();

    const columns: ColumnDef<SimpleTag>[] = useMemo(
        () => [
            {
                accessorKey: "name",
                header: () => <span>{tg("table.name")}</span>,
                cell: ({ row }) => (
                    <Link to={"/app/tag/$tagId"} params={{ tagId: row.original.uuid }}>
                        <div className="max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap sm:max-w-[400px]">
                            {" "}
                            <span>{row.original.name}</span>
                        </div>
                    </Link>
                ),
            },
            {
                accessorKey: "color",
                header: () => <span>{tg("table.color")}</span>,
                cell: ({ row }) => (
                    <Badge variant={row.original.color.toLowerCase() as VariantProps<typeof badgeVariants>["variant"]}>
                        {row.original.color}
                    </Badge>
                ),
            },
            {
                accessorKey: "action",
                header: () => <div className="flex justify-end">{tg("table.action")}</div>,
                cell: ({ row }) => (
                    <div className="flex justify-end">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={() => setOpenDeleteTag(row.original)}
                                    variant="ghost"
                                    className="cursor-pointer"
                                >
                                    <TrashIcon />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{tg("tooltip.delete")}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                ),
            },
        ],
        [],
    );

    return (
        <HeadingLayout
            heading={t("heading.overview-title")}
            headingDescription={t("heading.overview-description")}
            headingChildren={<Button onClick={() => setOpenCreateTag(true)}>{t("button.create")}</Button>}
        >
            <DataTable filterTag={t("input.filter")} data={tagContext.tags.items} columns={columns} />

            {openCreateTag && (
                <Suspense>
                    <CreateTagDialog
                        onClose={() => {
                            setOpenCreateTag(false);
                        }}
                    />
                </Suspense>
            )}
            {openDeleteTag && (
                <Suspense>
                    <DeleteTagDialog
                        tag={openDeleteTag}
                        onClose={() => setOpenDeleteTag(undefined)}
                        onDeletion={() => {
                            setOpenDeleteTag(undefined);
                            tagContext.reset();
                        }}
                    />
                </Suspense>
            )}
        </HeadingLayout>
    );
}

export const Route = createFileRoute("/_app/app/tag/")({
    component: TagsOverview,
});
