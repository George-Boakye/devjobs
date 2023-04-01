import data from './data.json';

const jobData = data.map(job => { return {...job, search : `${job.company} ${job.position}`}});


export default jobData;