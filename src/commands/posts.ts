export default function blogs() {
  // Create the modal
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.right = '0';
  modal.style.bottom = '0';
  modal.style.left = '0';
  modal.style.background = 'rgba(0, 0, 0, 0.8)';
  modal.style.display = 'flex';
  modal.style.flexDirection = 'column';
  modal.style.width = '80%';
  modal.style.height = '90%';
  modal.style.margin = 'auto';
  modal.style.padding = '0';
  modal.style.borderRadius = '10px';
  modal.style.color = '#fff';



  // Create the title bar
  const titleBar = document.createElement('div');
  titleBar.style.display = 'flex';
  titleBar.style.justifyContent = 'space-between';
  titleBar.style.alignItems = 'center';
  titleBar.style.width = '100%';
  titleBar.style.padding = '0';
  titleBar.style.backgroundColor = '#343';
  titleBar.style.color = '#fff';
  titleBar.style.borderTopLeftRadius = '10px';
  titleBar.style.borderTopRightRadius = '10px';

  // Create the title
  const title = document.createElement('div');
  title.textContent = 'Posts';
  title.style.textAlign = 'center';
  title.style.flexGrow = '1';
  titleBar.appendChild(title);

  // Create the close button
  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.style.background = 'none';
  closeButton.style.border = 'none';
  closeButton.style.fontSize = '1.5em';
  closeButton.style.color = '#fff';
  closeButton.style.cursor = 'pointer';
  closeButton.addEventListener('click', function () {
    document.body.removeChild(modal);
  });
  titleBar.appendChild(closeButton);

  // Append the title bar to the modal
  modal.insertBefore(titleBar, modal.firstChild);

  // Create the description
  const description = document.createElement('div');
  description.innerHTML = "🌐 Discover my world of tech and blockchain in this section. <br>📝 Find my blog posts, related 🐦 tweets, and 🔗 links to blogs I find interesting, all with my thoughts. <br>🏷️ Use tags to easily find what you're looking for in this tech journey.";
  description.style.margin = '20px'; // Increase margin
  description.style.padding = '10px'; // Add padding
  description.style.fontSize = '1em'; // Adjust font size
  description.style.lineHeight = '1.6'; // Adjust line height
  description.style.color = '#333'; // Adjust color
  description.style.fontFamily = 'Georgia, serif'; // Change the font family
  description.style.backgroundColor = '#f9f9f9'; // Add a light background color
  description.style.borderRadius = '5px'; // Add rounded corners
  modal.appendChild(description);

  description.style.fontSize = '1.2em'; // Increase the font size
  description.style.lineHeight = '1.5'; // Increase the line height
  description.style.fontFamily = 'Arial, sans-serif'; // Change the font family

  modal.appendChild(description);

  const tempPosts = [
    {
      "title": "How to use the new Twitter API v2 with Node.js",
      "description": "Twitter recently released a new version of their API, Twitter API v2. It comes with a lot of new features and endpoints. In this article, we will learn how to use the new Twitter API v2 with Node.js.\n \
      tly released a new version of their API, Twit tly released a new version of their API, Twit tly released\n \
      a new version of their API, Twit\n \
      tly released a new version of their API, Twit tly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twit \n \
      tly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twit \n \
      tly released a new version of their API, Twit tly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twittly released a new version of their API, Twit \n \
      tly released a new version of their API, Twittly released a new",
      "links": [
        {
          "lnk": "https://blog.logrocket.com/how-to-use-the-new-twitter-api-v2-with-node-js/",
          "title": "How t"
        }
      ],
      "cover_image": "https://blog.logrocket.com/wp-content/uploads/2023/12/finding-fixing-rage-clicks-nocdn.png",
      "tags": ["nodejs", "twitter", "api"],
      "type": "refrence",
      "date": "2020-12-10"
    },
    {
      "title": "How to use the new",
      "description": "Twitter recently released a new version of their API, Twitter API v2. It comes with a lot of new features and endpoints. In this article, we will learn how to use the new Twitter API v2 with Node.js.",
      "links": [
        {
          "lnk": "https://blog.logrocket.com/how-to-use-the-new-twitter-api-v2-with-node-js/",
          "title": "How t"
        }
      ],
      "cover_image": "https://blog.logrocket.com/wp-content/uploads/2023/12/finding-fixing-rage-clicks-nocdn.png",
      "tags": ["nodejs", "twitter", "api"],
      "type": "blog-post",
      "date": "2020-12-10"
    },
    {
      "title": "How to use the new",
      "description": "Twitter recently released a new version of their API, Twitter API v2.\n \
       It comes with a lot of new features and endpoints. In this article, we will \n \
       learn how to use the new Twitter API v2 with Node.js.",
      "links": [
        {
          "lnk": "https://blog.logrocket.com/how-to-use-the-new-twitter-api-v2-with-node-js/",
          "title": "How t"
        }
      ],
      "cover_image": "https://blog.logrocket.com/wp-content/uploads/2023/12/finding-fixing-rage-clicks-nocdn.png",
      "tags": ["nodejs"],
      "type": "tweet",
      "date": "2020-12-10"
    }
  ]
  // Create the container
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.height = 'calc(100% - 60px)'; // Adjust as needed

  // Create the posts div
  const postsDiv = document.createElement('div');
  postsDiv.style.overflowY = 'scroll';
  postsDiv.style.width = '30%'; // Adjust as needed
  postsDiv.style.padding = '10px';
  postsDiv.style.borderRight = '1px solid #ddd';
  postsDiv.style.boxSizing = 'border-box'; // Add this line
  postsDiv.style.borderRadius = '5px'; // Add rounded corners
  // postsDiv.style.backgroundColor = '#f9f9f9'; // Add a light background color
  postsDiv.style.margin = '20px'; // Increase margin
  postsDiv.style.color = '#333'; // Adjust color



  container.appendChild(postsDiv);

  // Create the view div
  const viewDiv = document.createElement('div');
  viewDiv.style.width = '70%'; // Adjust as needed
  viewDiv.style.padding = '10px';
  viewDiv.style.overflowY = 'scroll'; // Add scroll feature
  viewDiv.style.maxHeight = 'calc(100vh - 60px)'; // Calculate the maxHeight based on the viewport height
  viewDiv.style.boxSizing = 'border-box'; // Add this line
  container.appendChild(viewDiv);

  // Add the posts to the posts div
  tempPosts.slice().reverse().forEach((post, index) => {
    const postDiv = document.createElement('div');
    postDiv.style.border = '1px solid #ddd';
    postDiv.style.marginBottom = '10px';
    postDiv.style.padding = '10px';
    postDiv.style.borderRadius = '5px';
    postDiv.style.backgroundColor = '#f9f9f9';

    // Add the title
    const title = document.createElement('h2');
    const realIndex = tempPosts.length - index;
    title.textContent = realIndex + "-" + post.title;
    postDiv.appendChild(title);

    // Add the date to the bottom right
    const date = document.createElement('p');
    date.textContent = post.date;
    date.style.textAlign = 'right';
    date.style.fontSize = '0.8em';
    postDiv.appendChild(date);

    // Add the tags to the bottom left
    const tags = document.createElement('div');
    post.tags.forEach(tag => {
      const tagDiv = document.createElement('div');
      tagDiv.textContent = tag;
      tagDiv.style.display = 'inline-block';
      tagDiv.style.marginRight = '5px';
      tagDiv.style.padding = '2px 5px';
      tagDiv.style.fontSize = '0.8em';
      tagDiv.style.borderRadius = '3px';
      tagDiv.style.backgroundColor = '#ddd';
      tags.appendChild(tagDiv);
    });
    tags.style.textAlign = 'left';
    postDiv.appendChild(tags);

    // postDiv.addEventListener('click', function () {
    //   // Clear the view div
    //   viewDiv.innerHTML = '';

    //   // Create a new div for the post content
    //   const postContentDiv = document.createElement('div');
    //   postContentDiv.style.padding = '10px';

    //   // Add the post image
    //   const img = document.createElement('img');
    //   img.src = post.cover_image;
    //   img.style.width = '60%'; // Adjust the image size
    //   postContentDiv.appendChild(img);

    //   // Add the post title
    //   const title = document.createElement('h1'); // Change 'h2' to 'h1' for a larger font size
    //   title.textContent = post.title;
    //   postContentDiv.appendChild(title);


    //   // Add the post tags
    //   post.tags.forEach(tag => {
    //     const tagDiv = document.createElement('div');
    //     tagDiv.textContent = tag;
    //     tagDiv.style.display = 'inline-block';
    //     tagDiv.style.marginRight = '5px';
    //     tagDiv.style.padding = '2px 5px';
    //     tagDiv.style.fontSize = '0.8em';
    //     tagDiv.style.borderRadius = '3px';
    //     tagDiv.style.backgroundColor = '#ddd';
    //     postContentDiv.appendChild(tagDiv);
    //   });

    //   //  // Add the post content
    //   // const content = document.createElement('p');
    //   // content.textContent = post.description;
    //   // postContentDiv.appendChild(content);

    //   // Add the post content
    //   // Add the post content
    //   const content = document.createElement('p');
    //   content.innerText = post.description;
    //   content.style.border = '1px solid #ddd'; // Add border
    //   content.style.padding = '10px'; // Add padding
    //   content.style.borderRadius = '5px'; // Add border radius
    //   // content.style.backgroundColor = '#f9f9f9'; // Change background color
    //   content.style.marginTop = '10px'; // Add margin top
    //   content.style.whiteSpace = 'normal'; // Break lines as necessary
    //   content.style.maxHeight = '60vh'; // Adjust this value as needed
    //   content.style.overflowY = 'auto'; // Add vertical scrolling
    //   postContentDiv.appendChild(content);

    //   // Add the post link
    //   post.links.forEach((lnk, index) => {
    //     const link = document.createElement('a');
    //     link.href = lnk.lnk;
    //     link.textContent = lnk.title + ': ' + lnk.lnk;
    //     link.style.display = 'block';
    //     link.style.marginTop = '10px';
    //     link.style.color = '#007bff';
    //     link.style.textDecoration = 'none';
    //     postContentDiv.appendChild(link);
    //   });

    //   // Add the post date
    //   const date = document.createElement('p');
    //   date.textContent = post.date;
    //   date.style.fontSize = '0.8em';
    //   date.style.color = '#6c757d';
    //   postContentDiv.appendChild(date);

    //   // Adjust the post content div style
    //   postContentDiv.style.maxHeight = '80vh'; // Adjust this value as needed
    //   postContentDiv.style.overflowY = 'auto'; // Add vertical scrolling

    //   // Add the post content div to the view div
    //   viewDiv.appendChild(postContentDiv);

    //   // const link = document.createElement('a');
    //   // link.href = post.link;
    //   // link.textContent = 'Read more';
    //   // viewDiv.appendChild(link);

    //   // const date = document.createElement('p');
    //   // date.textContent = 'Published on: ' + post.date;
    //   // viewDiv.appendChild(date);
    // });
    
    postDiv.addEventListener('click', function () {
      
      // Clear the view div
      const privousViewerDiv = document.querySelector('#viewer');
      if (privousViewerDiv) {
        modal.removeChild(privousViewerDiv);
      }

      // Create a new viewer section
      // Create a new viewer section
      // Create a new viewer section
      const viewerDiv = document.createElement('div');
      viewerDiv.id = 'viewer';
      viewerDiv.style.position = 'absolute';
      viewerDiv.style.right = '20px'; // Add 20px distance from the right
      viewerDiv.style.top = '20%'; // Position it a little bit down from the top
      viewerDiv.style.width = '66%'; // Increase the width to 50% of the modal width
      viewerDiv.style.height = '77%'; // Keep the height to 80% of the modal height
      viewerDiv.style.backgroundColor = 'rgba(255, 218, 185, 0.5)'; // Semi-transparent Peach Puff      viewerDiv.style.border = '1px solid #000';
      viewerDiv.style.boxSizing = 'border-box'; // Add this line
      viewerDiv.style.padding = '10px'; // Add padding
      viewerDiv.style.borderRadius = '10px'; // Add border radius
      modal.appendChild(viewerDiv);

      // Create the top bar
      const topBar = document.createElement('div');
      topBar.style.display = 'flex';
      topBar.style.justifyContent = 'space-between';
      topBar.style.alignItems = 'center';
      topBar.style.backgroundColor = '#ddd';
      topBar.style.padding = '10px';
      topBar.style.borderRadius = '10px';

      viewerDiv.appendChild(topBar);

      // Add the title to the top bar
      const title = document.createElement('h1');
      title.textContent = post.title;
      title.style.margin = '0';
      title.style.color = '#333';
      topBar.appendChild(title);


      // Add the exit button to the top bar
      const exitButton = document.createElement('button');
      exitButton.textContent = 'X';
      exitButton.style.border = 'none';
      exitButton.style.backgroundColor = 'transparent';
      exitButton.style.cursor = 'pointer';
      exitButton.style.fontSize = '1.2em';
      exitButton.addEventListener('click', function() {
        modal.removeChild(viewerDiv);
      });
      topBar.appendChild(exitButton);


      // Add the cover image
      const coverImage = document.createElement('img');
      coverImage.src = post.cover_image;
      coverImage.style.width = '100%';
      coverImage.style.height = '200px';
      coverImage.style.objectFit = 'cover';
      coverImage.style.borderRadius = '10px';
      coverImage.style.margin = '0 auto';
      coverImage.style.marginTop = '10px'; 
      viewerDiv.appendChild(coverImage);
      
      // Add the post type
      const postType = document.createElement('p');
      postType.textContent = post.type;
      postType.style.fontSize = '0.8em';
      postType.style.textAlign = 'center';
      viewerDiv.appendChild(postType);

      // Add the tags
      const tagsDiv = document.createElement('div');
      tagsDiv.style.display = 'flex';
      tagsDiv.style.justifyContent = 'flex-start';
      tagsDiv.style.flexWrap = 'wrap';
      post.tags.forEach(tag => {
        const tagDiv = document.createElement('div');
        tagDiv.textContent = tag;
        tagDiv.style.fontSize = '0.8em';
        tagDiv.style.border = '1px solid #000';
        tagDiv.style.borderRadius = '5px';
        tagDiv.style.margin = '10px';
        tagDiv.style.padding = '5px';
        tagsDiv.appendChild(tagDiv);
      });
      viewerDiv.appendChild(tagsDiv);

      // Add the post content
      const content = document.createElement('p');
      content.innerText = post.description;
      content.style.padding = '10px';
      content.style.overflow = 'hidden';
      content.style.lineHeight = '1.5';
      content.style.wordBreak = 'break-word';
      content.style.overflowWrap = 'break-word';
      content.style.whiteSpace = 'nowrap';
      content.style.textOverflow = 'ellipsis';
      viewerDiv.appendChild(content);


      // Add the post link
      post.links.forEach((lnk, index) => {
        const link = document.createElement('a');
        link.href = lnk.lnk;
        link.textContent = lnk.title + ': ' + lnk.lnk;
        link.style.display = 'block';
        link.style.color = '#7f6f';
        link.style.textDecoration = 'none';
        link.style.margin = '10px';

        viewerDiv.appendChild(link);
      });

      // Add the date
      const date = document.createElement('p');
      date.textContent = new Date(post.date).toLocaleDateString();
      date.style.fontSize = '0.8em';
      date.style.textAlign = 'right';
      date.style.color = '#6e9d';
      date.style.margin = '10px';
      viewerDiv.appendChild(date);

    });

    postsDiv.appendChild(postDiv);
  });

  // Append the container to the modal
  modal.appendChild(container);



  // Append the modal to the body
  document.body.appendChild(modal);
}