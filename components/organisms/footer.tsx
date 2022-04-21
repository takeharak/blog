import Container from '../container'

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200">
      <Container>
        <div className="flex flex-col items-center py-4">
          <object
            className="max-h-16 w-auto lg:max-h-24"
            data="/logos/logotype.svg"
            type="image/svg+xml"
          />
          <p className="mb-10 text-center text-xs text-gray-800 dark:text-gray-100 lg:text-sm">
            © 2022 takeharak
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
