import '../App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
function Group5(){
    let grp5 = [{
        name: 'Hareem Fatima',
        enrollment: '02-131192-020',
        github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
        live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
      },{
        name: 'Ahmed Bin Alam Rao',
        enrollment: '02-131192-046',
        github:'https://github.com/AbdullahIqbal10/Assignment-2-web-engineering',
        live: 'https://abdullahiqbal10.github.io/Assignment-2-web-engineering/'
      },{
        name: 'Sadia Ambreen',
        enrollment: '02-131192-056',
        github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
        live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
      },{
        name: 'Abdul Rehman',
        enrollment: '02-131192-064',
        github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
        live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
      }];
    return(
        <>
      
         <div className='members'>

         {
            grp5.map((e)=>{
                return(
                <div>
                    <figure> 
                          <figcaption><br/> {e.name} <br/><span>{e.enrollment}</span> </figcaption>
                          <div class="buttons">
                              <div>
                                  <span><a class="icons" href={e.github} target="_blank"><GitHubIcon/></a></span>
          
                              </div>
                              <div>
                                  <span><a class="icons" href={e.live} target="_blank"><LanguageIcon/></a></span>
                              </div>
                          </div>
                      </figure>
                  </div>)
            })
         }
            </div>
        </>
    )
}

export default Group5;