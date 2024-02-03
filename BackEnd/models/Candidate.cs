namespace InterviewProcessApi.models
{
    public class Candidate
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public long Phone {  get; set; }

        public string Sex { get; set; }

        public string Position { get; set; }

        public DateTime DateTime { get; set; }

    }
}
