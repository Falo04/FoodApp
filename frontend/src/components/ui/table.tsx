import * as React from "react";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";

function Table({ className, ...props }: React.ComponentProps<"table">) {
    return (
        <div data-slot="table-container" className={"relative w-full overflow-x-auto"}>
            <table data-slot="table" className={cn("w-full caption-bottom text-sm", className)} {...props} />
        </div>
    );
}

function TableStickyHeader({ className, ...props }: React.ComponentProps<"table">) {
    const tableRef = useRef<HTMLDivElement>(null);

    const [tableHeight, setTableHeight] = React.useState(0);

    const getTableHeight = () => {
        if (tableRef.current === null) {
            return;
        }
        const newHeight = tableRef.current.getBoundingClientRect().height;
        setTableHeight(newHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", getTableHeight);
        getTableHeight();

        return () => {
            window.removeEventListener("resize", getTableHeight);
        };
    }, []);

    return (
        <div data-slot="table-container" className={"block h-full w-full overflow-x-auto"} ref={tableRef}>
            <ScrollArea style={{ height: `${tableHeight}px` }}>
                <table
                    data-slot="table"
                    className={cn("w-full table-fixed caption-bottom text-sm", className)}
                    {...props}
                />
            </ScrollArea>
        </div>
    );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
    return (
        <thead
            data-slot="table-header"
            className={cn("bg-background sticky top-0 [&_tr]:border-b", className)}
            {...props}
        />
    );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
    return <tbody data-slot="table-body" className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
    return (
        <tfoot
            data-slot="table-footer"
            className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
            {...props}
        />
    );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
    return (
        <tr
            data-slot="table-row"
            className={cn(
                "hover:bg-sidebar/20 dark:hover-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
                className,
            )}
            {...props}
        />
    );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
    return (
        <th
            data-slot="table-head"
            className={cn(
                "text-muted-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className,
            )}
            {...props}
        />
    );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
    return (
        <td
            data-slot="table-cell"
            className={cn(
                "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className,
            )}
            {...props}
        />
    );
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
    return (
        <caption data-slot="table-caption" className={cn("text-muted-foreground mt-4 text-sm", className)} {...props} />
    );
}

export { Table, TableStickyHeader, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
