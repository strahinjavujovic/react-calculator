import React,{Component} from 'react';
import classes from './App.css';
import Calculator from '../components/Calculator/Calculator';
class App extends Component {
  state = {
      nizVrednosti:[],
      i:0,
      boardUnosa:'0',
      rez:0
  }
  ////calc unos u niz///////////////////////////////////////////////////////////////////////////////////////////
  
  unosUniz=(vrednost)=>{
    let i=this.state.i;
    let boardUnosa=this.state.boardUnosa;
    let niz=this.state.nizVrednosti;
    if(boardUnosa==='0')
      boardUnosa='';
    niz[i]=vrednost;
    boardUnosa+=vrednost;
    this.setState({niz:niz});
    
    if(niz[i]==='='){
      boardUnosa=this.izracunaj(boardUnosa);
    }
    
    i=i+1;
    
    this.setState({i:i});
    this.setState({boardUnosa:boardUnosa});
    

  }
  izracunaj=(boardUnosa)=>{
   
    let k=0;
    let rezultat=0;
    let broj='';
    let nizBrojeva=[];
    let nizZnakova=[];
    let nizRezultata=[];
    let rez=this.state.rez;
    let z=0;
    for(let j=0;j<this.state.nizVrednosti.length;j++){
      if(this.state.nizVrednosti[j]!=='+' && this.state.nizVrednosti[j]!=='=' && this.state.nizVrednosti[j]!=='-' && this.state.nizVrednosti[j]!=='*' && this.state.nizVrednosti[j]!=='/'){
        broj+=this.state.nizVrednosti[j];
      }
      else if(this.state.nizVrednosti[j]==='+' || this.state.nizVrednosti[j]==='=' || this.state.nizVrednosti[j]==='-' || this.state.nizVrednosti[j]==='*' || this.state.nizVrednosti[j]==='/'){

        nizZnakova[z]=this.state.nizVrednosti[j];
        nizBrojeva[k]=broj;
       
          if(nizBrojeva[k]===''){
            nizBrojeva.splice(k,1);
            k=k-1;
            }
        broj='';
        k=k+1;
        z++;
      }    
    }
    for(let m=0;m<z;m++){
    
     let f=0;
      if(nizZnakova[m]==='+'){
        nizBrojeva[f]=Math.floor(nizBrojeva[f])+Math.floor(nizBrojeva[f+1]);
        nizRezultata[m]=nizBrojeva[f];
        nizBrojeva.splice(f+1,1);
      }
      else if(nizZnakova[m]==='-'){
        nizBrojeva[f]=Math.floor(nizBrojeva[f])-Math.floor(nizBrojeva[f+1]);
        nizRezultata[m]=nizBrojeva[f];
        nizBrojeva.splice(f+1,1);
      }
      else if(nizZnakova[m]==='*'){
        nizBrojeva[f]=Math.floor(nizBrojeva[f])*Math.floor(nizBrojeva[f+1]);
        nizRezultata[m]=nizBrojeva[f];
        nizBrojeva.splice(f+1,1);
      }
      else if(nizZnakova[m]==='/'){
        nizBrojeva[f]=Math.floor(nizBrojeva[f])/Math.floor(nizBrojeva[f+1]);
        nizRezultata[m]=nizBrojeva[f];
        nizBrojeva.splice(f+1,1);
      }
      
    }
   
    rezultat=nizRezultata[nizRezultata.length-1];
    rez=rezultat;
    this.setState({rez:rez})
    return rezultat;
    
  }
  deleteAll=()=>{//C
    let i=this.state.i;
    let boardUnosa=this.state.boardUnosa;
    let niz=this.state.nizVrednosti;
    i=0;
    boardUnosa='0';
    this.state.nizVrednosti=[];
    this.setState({i:i});
    this.setState({niz:niz});
    this.setState({boardUnosa:boardUnosa});
    
  }
  obrisiCifru=()=>{//BCKS
    let i=this.state.i;
    let boardUnosa=this.state.boardUnosa;
    let niz=this.state.nizVrednosti;
    i=i-1;
    boardUnosa=boardUnosa.slice(0,-1);
    niz.splice(niz.length-1,1);
    this.setState({i:i})
    this.setState({niz:niz})
    this.setState({boardUnosa:boardUnosa})
  }
  obrisiBroj=()=>{//CE
    let i=this.state.i;
    let boardUnosa=this.state.boardUnosa;
    let niz=this.state.nizVrednosti;
    let rezultat=this.state.rez;
    let nizZnakova=this.state.nizZnakova;
    let znak;
    let j=0;

    for(let k=niz.length-1;k>=0;k--){
      if(this.state.nizVrednosti[k]!=='+' && this.state.nizVrednosti[k]!=='=' && this.state.nizVrednosti[k]!=='-' && this.state.nizVrednosti[k]!=='*' && this.state.nizVrednosti[k]!=='/'){
        niz.splice(niz.length-1,1)
        i=i-1;
        this.setState({niz:niz})
        j++;
      }
      else  {
        znak=this.state.nizVrednosti[k];
        break;
      } 
    }  
    boardUnosa=boardUnosa.slice(0,-j);
    this.setState({i:i})
    this.setState({boardUnosa:boardUnosa})
  }
  render(){
  
    return (
        <div className={classes.App}>
          <Calculator
            deleteAll={this.deleteAll}
            click={this.unosUniz}
            boardUnosa={this.state.boardUnosa}
            izracunaj={this.izracunaj}
            obrisiCifru={this.obrisiCifru}
            obrisiBroj={this.obrisiBroj}
          />
        </div>
    );
  }
}

export default App;
