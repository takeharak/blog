import Link from 'next/link'

const Header = () => {
  return (
    <>
      <div className="mx-auto mb-6 mt-4 flex max-w-2xl flex-row md:mb-16 md:mt-12">
        <object
          className="ml-8 mt-1.5 max-h-4 w-auto md:ml-0 md:max-h-8"
          data="/blog/logos/icon.svg"
          type="image/svg+xml"
        />
        <h1 className="ml-2 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
          <Link href="/">
            <a className="hover:no-underline">Blog</a>
          </Link>
          .
        </h1>
      </div>
    </>
  )
}

export default Header
