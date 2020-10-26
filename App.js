import React from 'react';
import './App.css';
import UserInfo from './UserInfo/UserInfo';
import SwitchUser from './SwitchUser/SwitchUser';
import Post from './Post/Post'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [{
        id: 0,
        firstname: "Walid",
        name: "Doe",
        birthday: new Date(1989, 3, 7),
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        lastPost: "Je suis heureux",
        score: 0,
        backgroundColor: 'white'
      },
      {
        id: 1,
        firstname: "Malik",
        name: "Nick",
        birthday: new Date(1999, 9, 1),
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Wayfarers&hairColor=Auburn&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Wink&eyebrowType=UpDownNatural&mouthType=ScreamOpen&skinColor=Tanned",
        lastPost: "Je suis content",
        score: 0,
        backgroundColor: 'white'
      },
      {
        id: 2,
        firstname: "Kévin",
        name: "Michel",
        birthday: new Date(2004, 29, 12),
        avatar: "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription01&hatColor=Blue02&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Tongue&skinColor=Tanned",
        lastPost: "Les vacances...",
        score: 0,
        backgroundColor: 'white'
      }],
      selectedUser: 0
    }
  }

  updateBackground(selectedUser) {
    var index = this.state.profiles.findIndex(x => x.id === selectedUser);
    const oldBackgroundColor = this.state.profiles[index].backgroundColor

    let newBackgroundColor = ''
    if (oldBackgroundColor === 'white') {
      newBackgroundColor = 'yellow'
    } else {
      newBackgroundColor = 'white'
    }

    this.setState({
      profiles: [
        ...this.state.profiles.slice(0, index),
        Object.assign({}, this.state.profiles[index], { backgroundColor: newBackgroundColor }),
        ...this.state.profiles.slice(index + 1)
      ]
    });
  }

  onSwitchUserButtonClicked(selectedUser) {
    this.setState({
      selectedUser: selectedUser
    })
  }

  onClickButtonSuper(selectedUser) {
    var index = this.state.profiles.findIndex(x => x.id === selectedUser);


    this.setState({
      profiles: [
        ...this.state.profiles.slice(0, index),
        Object.assign({}, this.state.profiles[index], { score: this.state.profiles[index].score + 1 }),
        ...this.state.profiles.slice(index + 1)
      ]
    });
  }

  render() {
    const switchButtons = this.state.profiles.map((profil) =>
      <SwitchUser name={profil.name} onSwitchUserButtonClicked={this.onSwitchUserButtonClicked.bind(this)} id={profil.id} />)

    const selectedUser = this.state.profiles[this.state.selectedUser]

    return (
      <div className="App" >
        <div className="SwitchUser-bouton">
          {switchButtons}
        </div>
        < UserInfo user={selectedUser} onChangeStyleButtonClicked={this.updateBackground.bind(this)} />
        <Post post={selectedUser.lastPost} score={selectedUser.score} onClickButtonSuper={this.onClickButtonSuper.bind(this)} id={selectedUser.id} />
      </div>
    );
  }
}

export default App;