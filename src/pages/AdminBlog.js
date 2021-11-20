import React, { useEffect, useState } from 'react'
import Pagination from 'react-js-pagination'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { deleteBlog, findBlog } from '../api/Admin'
import { getBlogs } from '../api/UserPost'
import Breadcrumb from '../components/Breadcrumb'
function AdminBlog() {
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        getBlogs(setBlog)
    }, [])

    const BlogKeyDown = (param) => {
        findBlog(setBlog, param.target.value);
    }
    
    return (
        <div>
            <Breadcrumb title="Blog" type="admin" />
            <div class="container-fluid">
                <div className="row mt-3 mb-3">
                    <div className="col-sm-6">
                        <input className="form-control rounded-5" type="text"
                            name="keyword" id="keyword" placeholder="Find Blog"
                            onKeyDown={BlogKeyDown}
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="datatable table table-bordered table-hover table-center mb-0">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>ID</th>
                                                <th>Title</th>
                                                <th>User name</th>
                                                <th>Link</th>
                                                <th>Create at</th>
                                                <th class="text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {blog ? blog.data.map((blog, index) => {
                                                return (
                                                    <tr key={blog._id}>
                                                        <td>{blog._id}</td>

                                                        <td>
                                                            <h2 class="table-avatar">
                                                                {blog.title}
                                                            </h2>
                                                        </td>
                                                        <td>
                                                            {blog.user?.name ? blog.user.name : null}
                                                        </td>
                                                        <td>
                                                            <Link to={`/blog/detail/${blog._id}`} >Link</Link>
                                                        </td>
                                                        <td>
                                                            <Moment format="YYYY/MM/DD">{blog.created_at}</Moment>
                                                        </td>
                                                        <td class="text-right">
                                                            <div class="actions" onClick={() => deleteBlog(setBlog, blog._id)}>
                                                                <a
                                                                    data-toggle="modal"
                                                                    href="#delete_modal"
                                                                    class="btn btn-sm bg-danger-light"
                                                                >
                                                                    <i class="fa fa-trash"></i> Delete
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }) : null}
                                        </tbody>
                                    </table>

                                    {blog && <div className="row mt-3 justify-content-center">
                                        <Pagination
                                            activePage={blog.current_page}
                                            itemsCountPerPage={blog.per_page}
                                            totalItemsCount={blog.total}
                                            pageRangeDisplayed={5}
                                            onChange={(num) => getBlogs(setBlog, num)}
                                            itemClass="page-item"
                                            linkClass="page-link"
                                            firstPageText="First"
                                            lastPageText="Last"
                                        /></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminBlog
