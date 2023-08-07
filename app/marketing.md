import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { MoonLoader } from 'react-spinners'

const Home: NextPage = () => {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [suggestion, setSuggestion] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (input.length < 30) setError(false)
  }, [input])

  const submit = async () => {
    // Check if character limit is exceeded
    if (input.length > 30) return setError(true)

    // Set loading state
    setLoading(true)

    try {
      const res = await fetch('/api/marketing-copy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      })

      const suggestion: { result: string } = await res.json()
      const { result } = suggestion
      console.log('result', result)

      setSuggestion(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Marketing Copy Project</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-7xl mx-auto py-12'>
        <h2 className='text-2xl font-b  old text-center pb-2'>Marketing Copy Generator</h2>
        {/* Input field for marketing copy */}
        <div className='flex flex-col gap-4 justify-center w-1/3 mx-auto'>
          <div className='relative w-full'>
            {/* Error message */}
            {error && (
              <p className='text-xs pt-1 text-red-500'>Character limit exceeded, please enter less text</p>
            )}
            <textarea
              rows={3}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='w-full border-2 border-gray-300 bg-white p-4 rounded-lg text-sm focus:outline-none resize-none'
              placeholder='Enter your topic here'
            />
            {/* Character limit in bottom right of textarea */}
            <div
              className={`absolute ${
                input.length > 30 ? 'text-red-500' : 'text-gray-400'
              } bottom-2 right-2 text-xs`}>
              <span>{input.length}</span>/30
            </div>
          </div>
          <button
            type='button'
            onClick={submit}
            className='bg-blue-500 h-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            {loading ? (
              <div className='flex justify-center items-center gap-4'>
                <p>Loading...</p>
                <MoonLoader size={20} color='white' />
              </div>
            ) : (
              'Generate'
            )}
          </button>

          {/* Output field for marketing copy */}
          {suggestion && (
            <div className='mt-8'>
              <h4 className='text-lg font-semibold pb-2'>Your marketing copy:</h4>
              <div className='relative w-full rounded-md bg-gray-100 p-4'>
                <p className='text-sm text-gray-700'>{suggestion}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home