import { useLayoutEffect, useState } from 'react'

const MIN_DEVICE_WIDTH = 375

const getViewport = ({ width }: { width: string }) => {
    return `width=${width},initial-scale=1.0,maximum-scale=1.0`
}

export const useViewport = () => {
    const [viewport, setViewport] = useState<string>(
        'width=device-width,initial-scale=1.0,maximum-scale=1.0'
    )

    useLayoutEffect(() => {
        setViewport(
        getViewport({
            width: `${
            window.innerWidth > MIN_DEVICE_WIDTH
                ? 'device-width'
                : MIN_DEVICE_WIDTH
            }`,
        })
        )
    }, [])

    return { viewport }
}