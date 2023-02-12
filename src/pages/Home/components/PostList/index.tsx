import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { BlogContext } from '../../../../contexts/BlogContext'
import {
  PostCard,
  PostCardBody,
  PostCardHeader,
  PostListContainer,
} from './styles'

export function PostList() {
  const { blogPosts } = useContext(BlogContext)

  return (
    <PostListContainer>
      {blogPosts.map((post) => (
        <PostCard key={post.id} to="/post">
          <PostCardHeader>
            <strong>{post.title}</strong>
            <span>
              {formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </PostCardHeader>
          <PostCardBody>{post.body}</PostCardBody>
        </PostCard>
      ))}
    </PostListContainer>
  )
}
