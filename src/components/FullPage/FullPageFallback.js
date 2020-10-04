import React from 'react'

const FullPageFallback = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100%',
                margin: 0,
                position: 'relative',
            }}
        >
            Loading...
        </div>
    )
}

export default FullPageFallback
