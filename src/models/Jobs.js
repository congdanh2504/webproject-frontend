export function sortDescendingByRating (setJobs, jobs){
  var newJobs = jobs.data.sort((a, b)=>{
    return parseInt(b.rate) - parseInt(a.rate);
  });
  var job={
    current_page: jobs.current_page,
    per_page: jobs.per_page,
    total: jobs.total,
    data: newJobs,
  }
  setJobs(job);
}

export function sortLatest(setJobs, jobs) {
  var newJobs = jobs.data.sort((a, b)=>{
    var date_1 =new Date(b.created_at);
    var date_2 =new Date(a.created_at)
    return date_1 - date_2;
  });
  var job={
    current_page: jobs.current_page,
    per_page: jobs.per_page,
    total: jobs.total,
    data: newJobs,
  }
  setJobs(job);
}