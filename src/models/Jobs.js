export function sortDescendingByRating (setJobs, jobs){
  var newJobs = jobs.data.sort((a, b)=>{
    return parseInt(b.user.rate.avg) - parseInt(a.user.rate.avg);
  });
  setJobs({...jobs, data:newJobs});
}

export function sortLatest(setJobs, jobs) {
  var newJobs = jobs.data.sort((a, b)=>{
    var date_1 =new Date(b.created_at);
    var date_2 =new Date(a.created_at)
    return date_1 - date_2;
  });
  setJobs({...jobs, data:newJobs});
}

export function sortBySalary(setJobs, jobs) {
  var newJobs= jobs.data.sort((a, b)=>{
    return parseInt(b.salary) - parseInt(a.salary);
  });
  setJobs({...jobs, data:newJobs});
}