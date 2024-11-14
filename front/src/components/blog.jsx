import 'bootstrap/dist/css/bootstrap.min.css';

const Blog = () => {
  return (
    <div className='col-12 col-md-2 col-lg-3 mb-3'>
        <div className='card border-0 shadow-lg'>
            <img src='../img/31343C.svg' className='card-img-top' alt="Blog Thumbnail" />
            <div className='card-body'>
                <h2 className='h5'>Blog i</h2>
                <p>Details for your blog.</p>
                <div className='d-flex justify-content-between'>
                <a href='#' className='btn btn-dark'>Details</a>
                <a href='#' className='text-dark'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                    </svg>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;
