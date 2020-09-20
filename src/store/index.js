import { createStore } from 'vuex'
// import axios from 'axios'

export default createStore({
  state: {
    videoList: [
      {
        id: 1,
        title: 'Video 1',
        videoFormat: 'youtube',
        videoUrl: 'https://www.youtube.com/embed/S7SLep244ss'
      },
      {
        id: 2,
        title: 'Video 2',
        videoFormat: 'youtube',
        videoUrl: 'https://www.youtube.com/embed/S7SLep244ss'
      },
      {
        id: 3,
        title: 'Video 3',
        videoFormat: 'youtube',
        videoUrl: 'https://www.youtube.com/embed/S7SLep244ss'
      },
      {
        id: 4,
        title: 'Video 4',
        videoFormat: 'youtube',
        videoUrl: 'https://www.youtube.com/embed/S7SLep244ss'
      },
      {
        id: 5,
        title: 'Video 5',
        videoFormat: 'mp4',
        videoUrl: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
      }
    ],
    articleList: [],
    faqList: [
      {
        id: 1,
        title: 'Question 1',
        questionText: 'Lorem ipsum dolor sit amet vero?',
        answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
      {
        id: 2,
        title: 'Question 2',
        questionText: 'Ad doloremque minima nihil porro reprehenderit ullam veniam vero?',
        answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
      {
        id: 3,
        title: 'Question 3',
        questionText: 'A architecto asperiores at atque?',
        answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
      {
        id: 4,
        title: 'Question 4',
        questionText: 'Lorem ipsum dolor sit amet, veniam vero?',
        answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
      {
        id: 5,
        title: 'Question 5',
        questionText: 'Ad doloremque minima nihil porro reprehenderit ullam veniam vero?',
        answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
    ]
  },
  mutations: {
    setListArticles(state, list) {
      state.articleList = list.map(item=>{
        return {
          id: item.id,
          title: item.title,
          articleText: item.body
        }
      });
    }
  },
  actions: {
    setListArticles(context, list) {
      context.commit('setListArticles', list)
    }
  },
  modules: {
  },
  getters: {
    getListVideos: state => {
      return state.videoList
    },
    getVideoById: state => id => {
      return state.videoList.find(item => item.id === id)
    },
    getListArticles: state => {
      return state.articleList
    },
    getArticleById: state => id => {
      return state.articleList.find(item => item.id === id)
    },
    getListFaq: state => {
      return state.faqList
    }
  }
})
