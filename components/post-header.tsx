import Avatar from './molecules/avatar'
import DateFormatter from './atoms/date-formatter'
import CoverImage from './atoms/cover-image'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage?: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div className="mx-auto max-w-2xl">
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:mb-12 md:block">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        {coverImage && (
          <div className="mb-8 sm:mx-0 md:mb-16">
            <CoverImage title={title} src={coverImage} />
          </div>
        )}
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
