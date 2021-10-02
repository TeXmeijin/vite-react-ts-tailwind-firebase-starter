import { useAuthState } from '~/components/contexts/UserContext'
import { SignInButton } from '~/components/domain/auth/SignInButton'
import { SignOutButton } from '~/components/domain/auth/SignOutButton'
import { Head } from '~/components/shared/Head'

function Index() {
  const { state } = useAuthState()

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="hero min-h-screen">
        <div className="text-center hero-content">
          <div>
            <h1 className="text-3xl font-bold">
              <a className="link link-primary" target="_blank" href="https://vitejs.dev/" rel="noreferrer">
                Vite
              </a>{' '}
              +{' '}
              <a className="link link-primary" target="_blank" href="https://reactjs.org/" rel="noreferrer">
                React
              </a>{' '}
              +{' '}
              <a className="link link-primary" target="_blank" href="https://www.typescriptlang.org/" rel="noreferrer">
                TypeScript
              </a>{' '}
              +{' '}
              <a className="link link-primary" target="_blank" href="https://tailwindcss.com/" rel="noreferrer">
                TailwindCSS
              </a>{' '}
              Starter</h1>
            <p className="mt-4 text-lg">
              For fast <b>prototyping</b>. Already set up{' '}
              <a
                className="link link-primary"
                target="_blank"
                href="https://github.com/firebase/firebase-js-sdk"
                rel="noreferrer"
              >
                Firebase(v9)
              </a>
              ,{' '}
              <a className="link link-primary" target="_blank" href="https://daisyui.com/" rel="noreferrer">
                daisyUI
              </a>
              ,{' '}
              <a className="link link-primary" target="_blank" href="https://github.com/eslint/eslint" rel="noreferrer">
                ESLint
              </a>
              ,{' '}
              <a className="link link-primary" target="_blank" href="https://github.com/prettier/prettier" rel="noreferrer">
                Prettier
              </a>.
            </p>
            <div className="mt-4">
              {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
