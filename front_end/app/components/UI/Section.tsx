type Props = {
    children: React.ReactNode
}

export default function Section(
    { children }: { children: React.ReactNode }
) {
    return (
        <div className="flex flex-col gap-2 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 px-8 py-4 mt-1">
            {children}
        </div>
    )
}