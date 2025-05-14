import React from 'react'
import { BlogHome } from './BlogHome'
export const Blog = ({url,cards}) => {
    return (
        <div>
            <BlogHome url={url} cards={cards}/>
        </div>
    )
}
