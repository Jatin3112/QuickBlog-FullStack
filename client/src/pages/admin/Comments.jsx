import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'
import CommentTableItem from '../../components/admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {

    const [comments, setComments] = useState([])
    const [filter, setFilter] = useState('Not Approved')

    const {axios} = useAppContext();

    const fetchComments = async ()=>{
        try {
          const { data } = await axios.get('/api/admin/comments')
          data.success ? setComments(data.comments) : toast.error(data.message)
        } catch (error) {
          toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchComments()
    },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-[#141414]'>
      <div className='flex justify-between items-center max-w-3xl'>
        <h1 className='text-gray-200'>Comments</h1>
        <div className='flex gap-4'>
            <button onClick={()=> setFilter('Approved')} className={`shadow-custom-sm border border-gray-600 rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Approved' ? 'text-primary' : 'text-gray-400'}`}>Approved</button>

            <button onClick={()=> setFilter('Not Approved')} className={`shadow-custom-sm border border-gray-600 rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Not Approved' ? 'text-primary' : 'text-gray-400'}`}>Not Approved</button>
        </div>
      </div>
      <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-[#1a1a1a] border border-gray-700 shadow rounded-lg scrollbar-hide'>
        <table className="w-full text-sm text-gray-400">
            <thead className="text-xs text-gray-300 text-left uppercase">
                <tr>
                    <th scope="col" className="px-6 py-3"> Blog Title & Comment </th>
                    <th scope="col" className="px-6 py-3 max-sm:hidden"> Date </th>
                    <th scope="col" className="px-6 py-3"> Action </th>
                </tr>
            </thead>
            <tbody>
                {comments.filter((comment)=>{
                    if(filter === "Approved") return comment.isApproved === true;
                    return comment.isApproved === false;
                }).map((comment, index)=> <CommentTableItem key={comment._id} comment={comment} index={index + 1} fetchComments={fetchComments} />)}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comments
