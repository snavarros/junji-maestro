import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {

  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span>Hola hola, </span>
            Bienvenido a nuestra app 👋
          </h1>
        </div>

        <div id="hero" className="rounded">
          <div className="text-container">
            <h2>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span> Datos y Estadisticas</span>
            </h2>
            <Link href="/establecimiento"> Maestro Establecimientos </Link>
          </div>
          <div className="logo-container">
            <svg
              fill="currentColor"
              role="img"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 41 2 C 37.14 2 34 5.14 34 9 C 34 10.845786 34.723158 12.521525 35.894531 13.773438 L 27.525391 24 L 15.919922 24 C 15.432051 20.613417 12.519553 18 9 18 C 5.14 18 2 21.14 2 25 C 2 28.86 5.14 32 9 32 C 12.519553 32 15.432051 29.386583 15.919922 26 L 27.501953 26 L 35.533203 36.638672 C 34.575514 37.836276 34 39.350757 34 41 C 34 44.86 37.14 48 41 48 C 44.86 48 48 44.86 48 41 C 48 37.14 44.86 34 41 34 C 39.512993 34 38.136901 34.470036 37.001953 35.263672 L 29.271484 25.025391 L 37.453125 15.023438 C 38.494969 15.639401 39.704431 16 41 16 C 44.86 16 48 12.86 48 9 C 48 5.14 44.86 2 41 2 z" />
            </svg>
          </div>
        </div>

        <div id="middle-content">
          <div id="learning-materials" className="rounded shadow">
            <h2>Materiales</h2>
            <a
              href="https://nx.dev/getting-started/intro?utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>
                Documentacion
                <span> Everything is in there </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://blog.nrwl.io/?utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span>
                Blog
                <span> Changelog, features & events </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/c/Nrwl_io/videos?utm_source=nx-project&sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>
                YouTube channel
                <span> Nx Show, talks & tutorials </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://nx.dev/react-tutorial/01-create-application?utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span>
                Tutoriales
                <span> Create an app, step-by-step </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="https://nxplaybook.com/?utm_source=nx-project"
              target="_blank"
              rel="noreferrer"
              className="list-item-link"
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <span>
                Video cursos
                <span> Nx custom courses </span>
              </span>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <div id="other-links">
            <a
              id="nx-console"
              className="button-pill rounded shadow"
              href="https://junji.sharepoint.com/sites/Datos_y_Estadisticas"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Sharepoint</title>
                <path d="M 29.03125 0 C 28.957031 -0.00390625 28.886719 0.015625 28.8125 0.03125 L 0.8125 5.3125 C 0.339844 5.402344 0 5.832031 0 6.3125 L 0 43.59375 C 0 44.074219 0.339844 44.503906 0.8125 44.59375 L 28.8125 49.96875 C 28.875 49.980469 28.9375 50 29 50 C 29.230469 50 29.445313 49.929688 29.625 49.78125 C 29.855469 49.589844 30 49.300781 30 49 L 30 1 C 30 0.703125 29.855469 0.410156 29.625 0.21875 C 29.453125 0.078125 29.25 0.0078125 29.03125 0 Z M 32 8.09375 L 32 19.90625 C 34.304688 19.535156 36.121094 17.882813 36.75 15.6875 C 38.671875 16.488281 40.277344 17.847656 41.40625 19.59375 C 39.394531 20.5625 38 22.621094 38 25 C 38 27.363281 39.386719 29.398438 41.375 30.375 C 40.242188 32.097656 38.632813 33.425781 36.71875 34.21875 C 36.0625 32.070313 34.273438 30.460938 32 30.09375 L 32 41.90625 C 34.789063 41.457031 36.851563 39.148438 36.96875 36.25 C 39.664063 35.269531 41.890625 33.433594 43.34375 30.96875 C 43.554688 30.992188 43.78125 31 44 31 C 47.308594 31 50 28.308594 50 25 C 50 21.691406 47.308594 19 44 19 C 43.804688 19 43.597656 19.011719 43.40625 19.03125 C 41.953125 16.519531 39.703125 14.648438 36.96875 13.65625 C 36.808594 10.800781 34.757813 8.539063 32 8.09375 Z M 14.59375 15.40625 C 15.59375 15.40625 16.394531 15.492188 17.09375 15.59375 C 17.792969 15.695313 18.492188 15.894531 19.09375 16.09375 L 19.09375 20 C 18.792969 19.800781 18.492188 19.605469 18.09375 19.40625 C 17.695313 19.207031 17.398438 19.101563 17 19 C 16.601563 18.898438 16.207031 18.8125 15.90625 18.8125 C 15.507813 18.710938 15.210938 18.6875 14.8125 18.6875 C 14.3125 18.6875 13.898438 18.710938 13.5 18.8125 C 13.101563 18.914063 12.800781 18.988281 12.5 19.1875 C 12.199219 19.386719 12.007813 19.613281 11.90625 19.8125 C 11.804688 20.011719 11.6875 20.292969 11.6875 20.59375 C 11.6875 20.894531 11.804688 21.207031 11.90625 21.40625 C 12.105469 21.605469 12.292969 21.894531 12.59375 22.09375 C 12.894531 22.292969 13.289063 22.488281 13.6875 22.6875 C 14.085938 22.886719 14.59375 23.113281 15.09375 23.3125 C 15.792969 23.613281 16.492188 23.914063 17.09375 24.3125 C 17.695313 24.613281 18.195313 25 18.59375 25.5 C 18.992188 25.898438 19.292969 26.398438 19.59375 27 C 19.792969 27.601563 19.90625 28.207031 19.90625 28.90625 C 19.804688 30.007813 19.613281 30.800781 19.3125 31.5 C 18.914063 32.199219 18.386719 32.789063 17.6875 33.1875 C 16.988281 33.585938 16.304688 33.894531 15.40625 34.09375 C 14.507813 34.292969 13.59375 34.40625 12.59375 34.40625 C 11.59375 34.40625 10.585938 34.292969 9.6875 34.09375 C 8.789063 33.992188 8.007813 33.707031 7.40625 33.40625 L 7.40625 29.3125 C 8.105469 29.914063 8.914063 30.386719 9.8125 30.6875 C 10.710938 30.988281 11.507813 31.1875 12.40625 31.1875 C 12.90625 31.1875 13.414063 31.195313 13.8125 31.09375 C 14.210938 30.992188 14.511719 30.886719 14.8125 30.6875 C 15.113281 30.488281 15.304688 30.292969 15.40625 30.09375 C 15.507813 29.894531 15.59375 29.605469 15.59375 29.40625 C 15.59375 29.007813 15.511719 28.707031 15.3125 28.40625 C 15.113281 28.105469 14.800781 27.894531 14.5 27.59375 C 14.101563 27.394531 13.6875 27.105469 13.1875 26.90625 C 12.6875 26.707031 12.195313 26.488281 11.59375 26.1875 C 10.195313 25.585938 9.105469 24.898438 8.40625 24 C 7.707031 23.101563 7.3125 22.105469 7.3125 20.90625 C 7.3125 19.90625 7.507813 19.105469 7.90625 18.40625 C 8.304688 17.707031 8.800781 17.1875 9.5 16.6875 C 10.199219 16.289063 10.914063 15.886719 11.8125 15.6875 C 12.710938 15.488281 13.59375 15.40625 14.59375 15.40625 Z" />
              </svg>
              <span>
                Sharepoint
                <span>Datos y Estadisticas</span>
              </span>
            </a>
            <br />
            <a
              id="nx-repo"
              className="button-pill rounded shadow"
              href="https://junji.sharepoint.com/sites/Datos_y_Estadisticas"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                fill="currentColor"
                role="img"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 8 7 C 4.69 7 2 9.69 2 13 L 2 33 C 2 35.97 4.16 38.440156 7 38.910156 L 7 36.869141 C 5.27 36.429141 4 34.86 4 33 L 4 13 C 4 10.79 5.79 9 8 9 L 41 9 C 43.21 9 45 10.79 45 13 L 45 33 C 45 34.86 43.73 36.429141 42 36.869141 L 42 38.910156 C 44.84 38.440156 47 35.97 47 33 L 47 13 C 47 9.69 44.31 7 41 7 L 8 7 z M 36.5 15 C 35.119 15 34 16.119 34 17.5 L 34 41.5 C 34 42.881 35.119 44 36.5 44 C 37.881 44 39 42.881 39 41.5 L 39 17.5 C 39 16.119 37.881 15 36.5 15 z M 20.5 21 C 19.119 21 18 22.119 18 23.5 L 18 41.5 C 18 42.881 19.119 44 20.5 44 C 21.881 44 23 42.881 23 41.5 L 23 23.5 C 23 22.119 21.881 21 20.5 21 z M 28.5 25 C 27.119 25 26 26.119 26 27.5 L 26 41.5 C 26 42.881 27.119 44 28.5 44 C 29.881 44 31 42.881 31 41.5 L 31 27.5 C 31 26.119 29.881 25 28.5 25 z M 12.5 30 C 11.119 30 10 31.119 10 32.5 L 10 41.5 C 10 42.881 11.119 44 12.5 44 C 13.881 44 15 42.881 15 41.5 L 15 32.5 C 15 31.119 13.881 30 12.5 30 z" />
              </svg>
              <span>
                PowerBI
                <span> Datos y Estadisticas </span>
              </span>
            </a>
            <div id="nx-cloud" className="rounded shadow">
              <div>
                <svg
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z"
                    fill="#0E2039"
                  />
                  <path
                    d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z"
                    fill="white"
                  />
                </svg>
                <h2>
                  Documentos y Archivos
                  <span>Datos y Estadisticas</span>
                </h2>
              </div>
              <p>
                Datos históricos de establecimientos y grupos.
              </p>
              
              <a
                href="https://nx.app/?utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Ver los documentos aqui.{' '}
              </a>
            </div>
            
          </div>
        </div>

        <div id="commands" className="rounded shadow">
          <h2>Otros Datos</h2>
          <p>Here are some things you can do with Nx:</p>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Add UI library
            </summary>
            <pre>
              <span># Generate UI lib</span>
              nx g @nrwl/next:library ui
              <span># Add a component</span>
              nx g @nrwl/next:component button --project=ui
            </pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View interactive project graph
            </summary>
            <pre>nx graph</pre>
          </details>
          <details>
            <summary>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Run affected commands
            </summary>
            <pre>
              <span># see what&apos;s been affected by changes</span>
              nx affected:graph
              <span># run tests for current changes</span>
              nx affected:test
              <span># run e2e tests for current changes</span>
              nx affected:e2e
            </pre>
          </details>
        </div>

        <p id="love">
          Carefully crafted with
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
      </div>
    </div>
  );
  
}
