using InterviewProcessApi.models;
using Microsoft.EntityFrameworkCore;

namespace InterviewProcessApi.data
{
    public class InterviewProcessDbContext : DbContext
    {
        public InterviewProcessDbContext(DbContextOptions options) : base(options) { }


        public DbSet<Candidate> Candidates { get; set; }

    }
}
