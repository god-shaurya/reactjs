import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
export default class News extends Component {
  
  constructor() {
    super()
    
    this.state = {
      articles:[],
      loading:false,
      page:1,
      totalsize:37

    }
  };
  async updateNews(){
    
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3bb1b5dd1f5b445cb792b68148a93e1b&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePreviousclick=async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3bb1b5dd1f5b445cb792b68148a93e1b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
  })
    console.log("previous")
  }
  handleNextclick= async ()=>{
    console.log("next")
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3bb1b5dd1f5b445cb792b68148a93e1b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    // this.setState({articles:parsedData.articles})
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
  })
  }
  render() {

    return (
      <div className='container my-3'>
        {this.state.loading&&<Spinner />}
        <h2>Top News Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}><Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsurl={element.url} /></div>
        })}
          
          
        </div>
        <div className="container d-flex justify-content-between my-4">
        <button type="button" disabled={this.state.page===1?this.state.page:false} className="btn btn-dark" onClick={this.handlePreviousclick}>Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextclick} disabled={this.state.page>=Math.ceil(this.state.totalsize/10)?this.state.page:false}>Next</button>
        </div>
      </div>
    )
  }
}
