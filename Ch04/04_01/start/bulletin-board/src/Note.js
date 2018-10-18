import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'

class Note extends Component {
    render(){
        return (
        <div className="note">
            <p>Learn React</p>
            <span>
                <button>
                    Edit
                </button>
                <button>
                    Trash
                </button>
            </span>
        </div>
        )
    }
}

export default Note