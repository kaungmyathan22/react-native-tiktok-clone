/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          songPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          songPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          songPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      videoUri
      description
      user {
        id
        username
        email
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      song {
        id
        name
        imageUri
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
      songPostsId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      videoUri
      description
      user {
        id
        username
        email
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      song {
        id
        name
        imageUri
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
      songPostsId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      videoUri
      description
      user {
        id
        username
        email
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      song {
        id
        name
        imageUri
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
      songPostsId
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      name
      imageUri
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          songPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      name
      imageUri
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          songPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      name
      imageUri
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          songPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
