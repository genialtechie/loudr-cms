import React, {useState, useEffect} from 'react'
import { Modal } from 'react-bootstrap'
import { getPosts } from '../services'
import FuzzySearch from 'fuzzy-search'

const SearchModal = ({show, hide}) => {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState()
  const [results, setResults] = useState()

  function handleChange(event) {
    const query = event.target.value
    setInput(query)
    const searcher = new FuzzySearch(posts, ['node.title'], {
      sort: true,
    });
    const res = searcher.search(input);
    setResults(res)
  }

  useEffect(async () => {
    const data = await getPosts()
    setPosts(data)
  }, [])
  return (
    <div>
        <Modal
        show={show}
        onHide={hide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        >
          <div className='bg-dialog' onChange={handleChange} >
            <Modal.Header closeButton closeVariant='white' >
              <form className='w-full m-2'>   
                  <div className="relative">
                      <input type="search" id="default-search" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search articles..." required />
                      
                  </div>
              </form>
            </Modal.Header>
            <Modal.Body>
              <div className='m-6 flex flex-col w-full' >
                {results && results.map(post => (
                  <div>
                    {input !== '' && <div className='pb-4 pt-2 px-4 flex flex-row' key={post.node.slug} >
                      <span className='my-auto' ><img src={post.node.featuredImage.url} alt="" className='h-24 w-28 object-cover p-2'/></span>
                      <span className='px-3 mt-3 text-left w-full'>
                        <h2 className='text-xl font-bold'>{post.node.title}</h2>
                        <span className='text-sm' >{post.node.excerpt.split(' ').slice(0, 13).join(' ').concat('...')}</span>
                      </span>
                    </div>}
                  </div>
                ))}
              </div>
            </Modal.Body>
          </div>
        </Modal>
    </div>
  )
}

export default SearchModal