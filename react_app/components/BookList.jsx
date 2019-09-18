import React from "react";
import {connect} from "react-redux";
import {getData} from "../actions";

const mapStateToProps = state => {
    return {books: state.books};
};

function mapDispatchToProps (dispatch) {
    return {
        getBookList : function(){
            dispatch(getData());
        }
    }
}

class  BookList extends React.Component{
    componentDidMount() {
        this.props.getBookList();
    }

    render() {
        return (
            <table className="table">
                <tbody>
                <tr key={1}>
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Price</th>
                </tr>

                {this.props.books.map(el => (
                    <tr key={el._id}>
                        <td>
                            {el.title}
                        </td>
                        <td>
                            {el.author_name}
                        </td>
                        <td>
                            {el.price}
                        </td>
                    </tr>

                ))}
                </tbody>
            </table>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);