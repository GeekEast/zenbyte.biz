# OOP
## Concepts

### **Classes and Instances**

- Classes are also called `Types` in Python.
    - For example, these are classes: int, float, str, bool
- Instances are values of a given class or type.
    - For example: 'abc' is a str instance (also called a string)

### **Object and Object-Oriented Programming**

- Every value in Python is an Object(`Type`).
    - Every instance is an object, and its type is some class.
    - Every class is an object, too (its type is **type**!).

## Instance Level

### **Directly add property**

- Quite like JavaScript, right?

```python
class Dog(object): # inherit object by defaultpass

d1 = Dog()
d1.name = 'Jack'
d1.age = 3
```

### **Preload property with constructor**

- Nothing need to be filled in `Dog()`

```python
class Dog(): # no argument = objectdef __init__(self, name, age):
        self.name = name
        self.age = age

d1 = Dog("hello", 1)
```

### **Add class method, don't forget self!**

- every method in class must have `self` as the **1st** argument

```python
class Dog():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def sayHi(self): # don't forget self
        print(f'my name is {self.name}')

d1 = Dog('James', 2)
d1.sayHi()
```

### **Set property**

```python
class Dog():
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.barkCount = 0

    def sayHi(self): 
        print(f'my name is {self.name}')

    def bark(self, n):
        while self.barkCount < n:
            print('bark')
            self.barkCount += 1  # modify barkCount property

d1 = Dog('James', 2)
d1.bark(3)
```

## **Class Level**

### class variables

```python
class A():
    x = 1 # x is a class variables
print(A.x) # access ✔️
a = A()
print(a.x) # access ✔️

```

### class methods

```python
class A():
    @staticmethoddef f(x):
        return 2*x

print(A.f(1))

```

## Special Methods

### **Compare Object**

- compare value without default behaviour

```python
class A(object): pass
a1 == a2 # always true
```

- customize value comparison

```python
class A(object):
    def __init__(self, x):
        self.x = x
    def __eq__(self,other):
        return isinstance(other, A) and self.x == other.x
```

- compare memory address

```python
print(a1 is a2)
```

### **Print Object**

- `print(object)`

```python
class A():
    def __str__(self):
        return "A"
a = A()
print(a)

```

- `print([object])`

```python
class A():
    def __str__(self):
        return "A"
    def __repr__(self):
        return "A"
a = A()
print([a])
```

## **Polymorphism**

- require a method to run, you can pass any object with that method

> reuse code by object's method
> 

```python
class Dog():
    def speak(self):
        print("woof!")

class Cat():
    def speak(self):
        print('meow')

for animal in [Dog(). Cat()]:
    animal.speak()
```

## **Inheritance**

- subclass copy everything from parent class

```python
class Animal():
    def run(self):
        print("animal is run")

class Dog(Animal):
    pass

d1 = Dog()
d1.run()
```

- override things from parent class

```python
class Animal():
    def run(self):
        print("animal is run")

class Dog(Animal):
    def run(self):
        print('dog is running')
d1 = Dog()
d1.run()
```