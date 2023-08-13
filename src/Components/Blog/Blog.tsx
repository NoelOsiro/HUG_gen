import React from 'react'

const Blog = () => {
  return (
    <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Blog</p>
                    <h2>Latest news & articles directly from our blog</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="assets/img/blog-1.jpg" alt="pic"/>
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">Lorem ipsum dolor sit</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="">Admin</a></p>
                                <p><i className="fa fa-comments"></i><a href="">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="assets/img/blog-2.jpg" alt="pic"/>
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">Lorem ipsum dolor sit</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="">Admin</a></p>
                                <p><i className="fa fa-comments"></i><a href="">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="assets/img/blog-3.jpg" alt="pic"/>
                            </div>
                            <div className="blog-text">
                                <h3><a href="#">Lorem ipsum dolor sit</a></h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                            </div>
                            <div className="blog-meta">
                                <p><i className="fa fa-user"></i><a href="">Admin</a></p>
                                <p><i className="fa fa-comments"></i><a href="">15 Comments</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Blog