#include<bits/stdc++.h>
using namespace std;
int main(){
    int n=5;
  
    for(int i=1;i<=5;i++){
        for(int j=1;j<=i;j++){
            int a= 5-i;
            int b=j;
            if(j==1){
                cout<<i<<" ";
            }
            if(j!=1){
cout<<a*b+i+1<<" ";
            }

        }
        cout<<endl;
    }
}