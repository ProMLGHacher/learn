

export default function layout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div style={{
        backgroundColor: '#F1F1F1',
        minHeight: '100dvh'
    }}>
        {
            children
        }
    </div>
}