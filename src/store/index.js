import { createStore } from 'vuex'

export default createStore({
  state: {
    content: [
      {
        id: 1,
        type: 'video',
        title: 'Video 1',
        videoFormat: 'youtube',
        videoUrl: 'https://www.youtube.com/embed/S7SLep244ss'
      },
      {
        id: 2,
        type: 'video',
        title: 'Video 2',
        videoFormat: 'youtube',
        videoUrl: 'https://www.youtube.com/embed/S7SLep244ss'
      },
      {
        id: 3,
        type: 'video',
        title: 'Video 3',
        videoFormat: 'youtube',
        videoUrl: 'https://www.youtube.com/embed/S7SLep244ss'
      },
      {
        id: 4,
        type: 'video',
        title: 'Video 4',
        videoFormat: 'youtube',
        videoUrl: 'https://www.youtube.com/embed/S7SLep244ss'
      },
      {
        id: 5,
        type: 'video',
        title: 'Video 5',
        videoFormat: 'mp4',
        videoUrl: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
      },
      {
        id: 6,
        type: 'article',
        title: 'Article 1',
        articleText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut cum deserunt, distinctio dolor dolore dolorem eaque earum eius enim esse explicabo fugiat hic impedit libero necessitatibus neque officia omnis optio pariatur possimus quaerat qui, rem repellendus reprehenderit sequi similique sint, temporibus vitae voluptate? Aliquid est incidunt laudantium sint. Necessitatibus.'
      },
      {
        id: 7,
        type: 'article',
        title: 'Article 2',
        articleText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ducimus incidunt ipsa nostrum porro quam, repellat veniam! A, amet consequuntur dicta dolorem eveniet fugit illo incidunt iste laudantium magni maxime nisi odio officiis perferendis placeat, quae quaerat qui quo repellendus sed tempora vel veritatis voluptate.'
      },
      {
        id: 8,
        type: 'article',
        title: 'Article 3',
        articleText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
      {
        id: 9,
        type: 'faq',
        title: 'Question 1',
        questionText: 'Lorem ipsum dolor sit amet vero?',
        answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
      {
        id: 10,
        type: 'faq',
        title: 'Question 2',
        questionText: 'Ad doloremque minima nihil porro reprehenderit ullam veniam vero?',
        answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
      {
        id: 11,
        type: 'faq',
        title: 'Question 3',
        questionText: 'A architecto asperiores at atque?',
        answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
      {
        id: 12,
        type: 'faq',
        title: 'Question 4',
        questionText: 'Lorem ipsum dolor sit amet, veniam vero?',
        answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
      {
        id: 13,
        type: 'faq',
        title: 'Question 5',
        questionText: 'Ad doloremque minima nihil porro reprehenderit ullam veniam vero?',
        answerText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores at atque blanditiis deserunt dignissimos distinctio dolorum eaque facilis id illo illum impedit incidunt ipsum iure iusto laudantium minima natus nemo, nobis non nulla obcaecati odio omnis pariatur placeat possimus quis, quod sunt ullam unde, voluptatibus voluptatum! Beatae dicta esse fugiat hic obcaecati. Excepturi iure sapiente sed similique veniam! Consequuntur culpa distinctio doloribus, exercitationem explicabo illo labore, laudantium natus odit perspiciatis porro reprehenderit saepe sed. Aliquam amet aut, eligendi expedita illo in, ipsa iste iusto mollitia nesciunt nisi praesentium quas qui tempore, unde. Ad doloremque minima nihil porro reprehenderit ullam veniam vero?'
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getListVideos: state => {
      return state.content.filter(item => item.type === 'video')
    },
    getVideoById: state => id => {
      return state.content.filter(item => item.type === 'video').find(item => item.id === id)
    },
    getListArticles: state => {
      return state.content.filter(item => item.type === 'article')
    },
    getArticleById: state => id => {
      return state.content.filter(item => item.type === 'article').find(item => item.id === id)
    },
    getListFaq: state => {
      return state.content.filter(item => item.type === 'faq')
    }
  }
})
