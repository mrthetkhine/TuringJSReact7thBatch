function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
  }
console.log('FirstElement ',firstElement<number>([1,2]));
console.log('FirstElement ',firstElement<string>(['1','2']));