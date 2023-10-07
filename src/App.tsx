import FpBackground from './components/FpBackground';
import '@aws-amplify/ui-react/styles.css';
import './App.css'

function App() {
  return (
    <div>
      <FpBackground />
      <div className='h-screen w-full flex justify-center align-text-bottom text-gray-200 -z-10'>
        <div className='relative isolate px-6 pt-14 lg:px-8'>
          <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden lg:text-xl md:text-lg sm:text-base sm:mb-8 sm:flex sm:justify-center sm:align-middle dark:text-slate-100 text-slate-900">
              <div className='w-96'>
                <h1 className='lg:text-6xl md:text-4xl sm:text-3xl sm:block lg:mb-5'>Hi,<br />I'm Anthony</h1>
                <p className='block'>
                  I'm an experienced Software Engineer
                  with expertise in Frontend development using React and Typescript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
