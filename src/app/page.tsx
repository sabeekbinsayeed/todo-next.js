import Showtodo from '@/components/Showtodo';
import Todo from '@/components/Todo';
import React from 'react';

const page = () => {
  return (
    <div>
      <h1>Next.js + Typescript</h1>
      <Todo></Todo>
      <Showtodo></Showtodo>
    </div>
  );
};

export default page;