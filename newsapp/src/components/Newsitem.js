import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsurl } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://media.istockphoto.com/id/613550954/vector/breaking-news-headline-newspaper-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ZLyQEdx1Ynh1WRsr9Nx2ZIo_NC7TCIUS_yQ3_FwL3tE="} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}.....</h5>
                        <p className="card-text">{description}....</p>
                        <a href={newsurl} target="_blank" rel="noreferrer" className="btn  btn-sm btn-primary">Read in Detail</a>
                    </div>
                </div>
            </div>
        )
    }
}
