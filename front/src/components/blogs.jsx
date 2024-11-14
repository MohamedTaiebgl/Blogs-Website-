
import Blog from './blog';
const blogs = () => {
  return (
    <div className='container'>
        <div className="d-flex justify-content-between pt-5 mb-4">
          <h4>Blogs</h4>
          <a href='/create' className='btn btn-dark'>Create</a>
        </div>
        <div className='row'>
          
            <Blog /><Blog /><Blog /><Blog />
            <Blog /><Blog /><Blog /><Blog />
            
          </div>
        </div>

  )
}

export default blogs