import React, { useState, useEffect } from 'react';
import author from './assets/author.png'


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showReadMorePopup, setShowReadMorePopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchData = async (pageNumber) => {
    try {
      const response = await fetch(`/blog/page/get`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageNumber: pageNumber - 1,
          noOfRecords: 6,
          userName: "all",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setPosts(data.response);
        setTotalPages(data.totalPages);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const limitWords = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };
  const limitLetters = (text, limit) => {

    if (text.length > limit) {
      text = text.substring(0, limit);
      text = text + ' ...'
    }
    return text;
  };
  const filteredPosts = posts.filter((post) =>
    post.sub.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const startPage = Math.max(1, currentPage - Math.floor(5 / 2));
  const endPage = Math.min(totalPages, startPage + 5 - 1);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  return (
    <div class="container-fluid" style={{ marginTop: '90px' }} >
      <div class="row">
        {filteredPosts.map((post) => (

          <div class="col-sm-6 col-md-6">
            <div class="thumbnail" key={post.id}>

              <div class="caption">
                {/* <img src={author} alt="author" width={50} height={50}/> */}
                <h3>{limitLetters(post.sub, 40)}</h3>
                <p>{limitLetters(post.desc, 40)}</p>

                {/* <a href="#"><span class="badge">Technology</span></a> */}
                <p style={{ position: 'relative' }}><a href="#" class="btn btn-primary" role="button">Read More</a></p>
              </div>
            </div>
          </div>
        ))}
      </div >
      <div class="row">
        <div class="col-sm-6 col-md-offset-5">
          <nav>
            <ul class="pagination">
              <li aria-label="Previous" onClick={prevPage} disabled={currentPage == 1}>
                <a >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
                {/* {Array.from({ length: 5 }, (_, index) => (
                   index+currentPage <= totalPages &&
                    <li><a key={index} onClick={() => goToPage(currentPage + 1)} className={currentPage === index + 1 ? 'active' : ''} href="#"> {index + currentPage}</a></li>
                  
              ))} */}
               {pageNumbers.map((pageNumber) => (
                <li className={currentPage === pageNumber ? 'active' : ''}><a key={pageNumber} onClick={() => goToPage(pageNumber )}  href="#"> {pageNumber}</a></li>
              ))}
              <li>
                <a aria-label="Next" onClick={nextPage} disabled={currentPage === totalPages}>
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>);
};

export default Home;