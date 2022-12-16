export interface IChapterEvent {
  results: [
    {
      id: number;
      title: string;
      start_date: string; //'2022-05-18T08:00:00+09:00';
      end_date: string; //'2022-05-18T11:00:00+09:00';
      url: string;
      status: 'Published' | 'Scheduled' | 'Draft' | 'Cancelled';
      total_tickets_sold: number;
      total_attendees: number;
      checkin_count: number;
    },
  ];
  status_counter: {
    Draft: number;
    Canceled: number;
    Pending: number;
    Published: number;
    Live: number;
    Completed: number;
  };
  links: {
    next: null;
    previous: null;
  };
  count: 160;
}
export interface IRecruitmentEvent {
  status: 'OPEN' | 'CLOSED';
  applicantCount: number;
  generation: number;
}
