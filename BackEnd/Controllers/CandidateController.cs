using InterviewProcessApi.data;
using InterviewProcessApi.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing.Matching;
using Microsoft.EntityFrameworkCore;

namespace InterviewProcessApi.Controllers
{
    [ApiController]
    [Route("/api/candidate")]
    public class CandidateController : Controller
    {
        private  readonly InterviewProcessDbContext context;

        public CandidateController(InterviewProcessDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCandidates()
        {
           var candidates = await context.Candidates.ToListAsync();

            return Ok(candidates);
        }

        private static DateTime lastAssignedInterviewTime = DateTime.Today.AddHours(8);

        [HttpPost]
        public async Task<IActionResult> AddCandidate([FromBody] Candidate candidateRequest)
        {
            candidateRequest.Id = Guid.NewGuid();

            // Set the interview time for the candidate
            candidateRequest.DateTime = GetNextInterviewTime();

            await context.Candidates.AddAsync(candidateRequest);
            await context.SaveChangesAsync();

            return Ok(candidateRequest);
        }

        private DateTime GetNextInterviewTime()
        {
            DateTime currentDate = DateTime.Now.Date;

            DateTime startTime = currentDate.AddHours(8);

            DateTime endTime = currentDate.AddHours(17);

            if (lastAssignedInterviewTime > endTime)
            {
                lastAssignedInterviewTime = startTime;
            }

            DateTime nextInterviewTime = lastAssignedInterviewTime.AddDays(3);

            lastAssignedInterviewTime = lastAssignedInterviewTime.AddMinutes(30);

            return nextInterviewTime;
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetCandidate([FromRoute] Guid id)
        {
            var candidate = await context.Candidates.FirstOrDefaultAsync(x => x.Id == id);

            if (candidate == null)
            {
                return NotFound();
            }
            return Ok(candidate);

        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateCandidate([FromRoute] Guid id, Candidate updateCandidateRequest)
        {

            var candidate = await context.Candidates.FindAsync(id);

            if (candidate == null)
            {
                return NotFound();
            }

            candidate.Name = updateCandidateRequest.Name;
            candidate.Email = updateCandidateRequest.Email;
            candidate.Phone = updateCandidateRequest.Phone;
            candidate.Sex = updateCandidateRequest.Sex;
            candidate.Position = updateCandidateRequest.Position;
            candidate.DateTime = updateCandidateRequest.DateTime;
            await context.SaveChangesAsync();

            return Ok(candidate);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteCandidate([FromRoute] Guid id)
        {
            var candidate = await context.Candidates.FindAsync(id);

            if (candidate == null)
            {
                return NotFound();
            }
            context.Candidates.Remove(candidate);
            await context.SaveChangesAsync();

            return Ok(candidate);

        }

    }
}


