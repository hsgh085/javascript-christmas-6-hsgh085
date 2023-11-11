import Date from '../models/Date';
import InputView from '../views/InputView';

class EventController {
  #date;

  #event;

  async order(){
    const date = InputView.readDate();
    this.#date=new Date(date);
  }
}
export default EventController;
