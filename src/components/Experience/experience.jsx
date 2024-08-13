import React from 'react'
import {GoAlert} from 'react-icons/go'
import './experience.css'


const Experience = () => {
  return (
    <section id= 'experience'>
        <h5>What I did</h5>
        <h2>Job Experience</h2>

        <div className="container service__container">
            <article className='service'>
                <div className="service__head">
                    <h3>Software Engineer at QuickStart Inc</h3>
                    
                </div>
                <ul className='service__list'>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Developed ETL tasks in python to migrate data from Magento to Amazon Redshift </p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Applauded for my efforts in creating an in-house data dashboard and student activity tracker using Flutter/Dart </p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Developed ETL pipeline to clean data in Amazon Redshift and connect to Excel through ODBC driver. Data is cleaned, labelled and categorized</p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Coded a Python Class that provides CRUD methods to manage files in Amazon S3 bucket </p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Wrote Bash scripts to automate tasks and Cron jobs on Linux servers  </p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Engineered APIs in Flask to convert pdfs to Images without saving any file locally</p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Engineered an API in Django to communicate with Postgres DB and update student’s information</p>
                    </li>
                </ul>
            </article>

            <article className='service'>
                <div className="service__head">
                    <h3>Web Development Skills Through Projects</h3>
                </div>
                <ul className='service__list'>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Software Development Methodologies and Software Architecture</p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Desiging UI and UX for Data Dashboards</p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Resposive Web Design Using Cutting Edge Tech : React , Flutter</p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Designing API's and Database Schemas</p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Scalable and Robust Coding using Python</p>
                    </li>
                    <li>
                        <GoAlert className='service_list-icon'/>
                        <p>Asynchronous Programming Using Dart and Python</p>
                    </li>
                
                </ul>
            </article>


        </div>


    </section>
    
  )
}

export default Experience