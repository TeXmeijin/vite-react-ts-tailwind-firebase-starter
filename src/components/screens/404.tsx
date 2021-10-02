import {Head} from "~/components/shared/Head";

function Page404() {
  return (
    <>
      <Head title={'The page is not found'}></Head>
      <div className="hero min-h-screen bg-gray-800">
        <div className="text-center hero-content text-3xl font-bold">
          <div>
            <h1>
              The page is not found.
            </h1>
            <div className='mt-4'>
              <a href='/' className='link-primary'>Top Page</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page404
