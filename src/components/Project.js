import React from 'react';
import './Project.css';

const Portfolio = () => {
  return (
    <section class="work" id="work">

        <h2 class="heading"><i class="ri-macbook-line"></i> Projects <span>Made</span></h2>

        <div class="box-container">

        <table id="projects" border="0" width="100%" 
        cellpadding="0" cellspacing="0" bgcolor="#c2c0c3">
        <tr>
            <td>
                <table border="0" cellpadding="15" 
                    cellspacing="0" width="80%" align="center">
                    
                    <tr>
                        <td height="10">
                            <font face="Times New Roman" 
                                size="5" color="black">
                                <ul>
                                    <li>
                                    Portfolio Project
                                        <a href="https://jksanjay.netlify.app/" 
                                           style={{textDecoration:"none"}}>
                                            &nbsp; ➲
                                        </a>
                                    </li>

                                    <li>
                                        <hr color="#c2c0c3"/>
                                        ChatApp
                                        <a href="https://chatapp-5j36.onrender.com/" 
                                           style={{textDecoration:"none"}}
                                            color="#c2c0c3">
                                            &nbsp; ➲
                                        </a>
                                    </li>

                                    <li>
                                        <hr color="#c2c0c3"/>
                                        Finance Tracker
                                        <a href="https://track-ur-finance.netlify.app/" 
                                           style={{textDecoration:"none"}}>
                                            &nbsp; ➲
                                        </a>
                                    </li>

                                    <li>
                                        <hr color="#c2c0c3"/>
                                        Inventory Management
                                        <a href="#" 
                                           style={{textDecoration:"none"}}>
                                            &nbsp; ➲
                                        </a>
                                    </li>
                                </ul>
                                <hr color="#c2c0c3"/>
                                <hr color="#c2c0c3"/>
                                <hr color="#c2c0c3"/>
                                <hr color="#c2c0c3"/>
                            </font>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

        </div>
    </section>

  );
};

export default Portfolio;
