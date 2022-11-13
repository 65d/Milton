import './App.css';
import React from "react";
import Cards from './componets/cards';
import Nav from './componets/nav';
// import Card from './componets/cards/card';

import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Nav/>
        <BrowserRouter>
          <Routes>
            <Route index element={ <Cards />} />
            <Route path="/card" >
              <Route path=':cardId' element={<Cards />}>
                {/*  */}
              </Route>
              
             
            </Route>
         <Route path="*" element={<h1 className='hhh1'>404</h1>}/>
     {/*      <Route path="*" element={<Cards />} /> */}
          </Routes>
        </BrowserRouter>


         {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
        {/* <div className="h55555">
        I can say that I am a planner because I like to put together a plan but anyway I always put all things until the last minute. And of course a bit forgetful. But when I  do thomeshing I try to do it to the letter. I never used instructions only when I got stuck and I am always following my head. I almost never lie even when it is a white lie. I am a little bit of a geek because of my passion for computers so nine out of ten times I am sitting at the computer. Usually I have a spare moment but successfully spend time on not very necessary things. I am lazy so I understand that I must do everything right away after receiving the task. I am determined and quite resourceful. I am sarcastic but my jokes could by very stupid. Being straight-forward is normal for me. In school I was very insecure. 
<br/>
<br/>
I am a normal English learner. I was a good English learner in high school. Of course I am trying to be a good English learner now. And I hope I am. I used to learn words in the evening. Now I am learning words during the day because in the night and evening I do other tasks. In the school i would not do homework but I was stupid there and after NMT I said for me that I never ever will study badly. 
<br/>
<br/>
I say as it is, I almost never used useful pieces of advice. But still, I know a few useful tips. If you want peace, prepare for war. I think it is the most useful piece for us. Always do what you are afraid to do. Believe and act as if it were impossible to fail. I ABSOLUTELY agree with that. Go further than you may think you can. So there are so many words of wisdom and many of them are useful. I can say that we shouldn't be afraid of problems and always get the job done. I think I should take advice from people with skils and maybe sometimes go with my gut feeling. 
<br/>
        </div> */}
    </div>
  );
}

export default App;
