import { useRouter } from 'next/router'
import React from 'react'

const BoardPage = () => {
  return (
    <div>안녕하세요 게시판 정적페이지 입니다.</div>
  )
}

// export const getServerSideProps = () => {...}
// ssr 은 페이지  생성 안됨
// 만약 원한다면,  next.config.js 에서 exportPathMap 을 이용하여 설정해주어야 한다.

export default BoardPage